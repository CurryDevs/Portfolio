
"use client";

import { useGSAP } from "@gsap/react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(SplitText);

const avatars = [
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face",
];

interface ShaderPlaneProps {
  vertexShader: string;
  fragmentShader: string;
  uniforms: { [key: string]: { value: unknown } };
}

function ShaderPlane({ vertexShader, fragmentShader, uniforms }: ShaderPlaneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.u_time.value = state.clock.elapsedTime * 0.5;
      material.uniforms.u_resolution.value.set(size.width, size.height, 1.0);
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
}

interface ShaderBackgroundProps {
  vertexShader?: string;
  fragmentShader?: string;
  uniforms?: { [key: string]: { value: unknown } };
  className?: string;
}

function ShaderBackground({
  vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader = `
    precision highp float;
    varying vec2 vUv;
    uniform float u_time;
    uniform vec3 u_resolution;
    uniform sampler2D iChannel0;
    #define STEP 256
    #define EPS .001
    float smin( float a, float b, float k )
    {
        float h = clamp( 0.5+0.5*(b-a)/k, 0.0, 1.0 );
        return mix( b, a, h ) - k*h*(1.0-h);
    }
    const mat2 m = mat2(.8,.6,-.6,.8);
    float noise( in vec2 x )
    {
      return sin(1.5*x.x)*sin(1.5*x.y);
    }
    float fbm6( vec2 p )
    {
        float f = 0.0;
        f += 0.500000*(0.5+0.5*noise( p )); p = m*p*2.02;
        f += 0.250000*(0.5+0.5*noise( p )); p = m*p*2.03;
        f += 0.125000*(0.5+0.5*noise( p )); p = m*p*2.01;
        f += 0.062500*(0.5+0.5*noise( p )); p = m*p*2.04;
        //f += 0.031250*(0.5+0.5*noise( p )); p = m*p*2.01;
        f += 0.015625*(0.5+0.5*noise( p ));
        return f/0.96875;
    }
    mat2 getRot(float a)
    {
        float sa = sin(a), ca = cos(a);
        return mat2(ca,-sa,sa,ca);
    }
    vec3 _position;
    float sphere(vec3 center, float radius)
    {
        return distance(_position,center) - radius;
    }
    float swingPlane(float height)
    {
        vec3 pos = _position + vec3(0.,0.,u_time * 5.5);
        float def =  fbm6(pos.xz * .25) * 0.5;
        float way = pow(abs(pos.x) * 34. ,2.5) *.0000125;
        def *= way;
        float ch = height + def;
        return max(pos.y - ch,0.);
    }
    float map(vec3 pos)
    {
        _position = pos;
        float dist;
        dist = swingPlane(0.);
        float sminFactor = 5.25;
        dist = smin(dist,sphere(vec3(0.,-15.,80.),60.),sminFactor);
        return dist;
    }
    vec3 getNormal(vec3 pos)
    {
        vec3 nor = vec3(0.);
        vec3 vv = vec3(0.,1.,-1.)*.01;
        nor.x = map(pos + vv.zxx) - map(pos + vv.yxx);
        nor.y = map(pos + vv.xzx) - map(pos + vv.xyx);
        nor.z = map(pos + vv.xxz) - map(pos + vv.xxy);
        nor /= 2.;
        return normalize(nor);
    }
    void mainImage( out vec4 fragColor, in vec2 fragCoord )
    {
      vec2 uv = (fragCoord.xy-.5*u_resolution.xy)/u_resolution.y;
        vec3 rayOrigin = vec3(uv + vec2(0.,6.), -1. );
        vec3 rayDir = normalize(vec3(uv , 1.));
        rayDir.zy = getRot(.15) * rayDir.zy;
        vec3 position = rayOrigin;
        float curDist;
        int nbStep = 0;
        for(; nbStep < STEP;++nbStep)
        {
            curDist = map(position + (texture(iChannel0, position.xz) - .5).xyz * .005);
            if(curDist < EPS)
                break;
            position += rayDir * curDist * .5;
        }
        float f;
        float dist = distance(rayOrigin,position);
        f = dist /(98.);
        f = float(nbStep) / float(STEP);
        f *= .9;
        vec3 col = vec3(f);
        fragColor = vec4(col,1.0);
    }
    void main() {
      vec4 fragColor;
      vec2 fragCoord = vUv * u_resolution.xy;
      mainImage(fragColor, fragCoord);
      gl_FragColor = fragColor;
    }
  `,
  uniforms = {},
  className = "w-full h-full",
}: ShaderBackgroundProps) {
  const shaderUniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector3(1, 1, 1) },
      ...uniforms,
    }),
    [uniforms],
  );

  return (
    <div className={className}>
      <Canvas className={className}>
        <ShaderPlane
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={shaderUniforms}
        />
      </Canvas>
    </div>
  );
}


export function HeroSection() {
  // Refs for GSAP animation (optional, for future enhancement)
  // const rootRef = useRef<HTMLDivElement>(null);
  // const bgRef = useRef<HTMLDivElement>(null);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-primary">
      {/* Animated Shader Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ShaderBackground className="w-full h-full" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container-custom text-center py-20 pt-40">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text leading-tight animate-slide-up">
            Build world class{" "}
            <br />
            websites at warp speed
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-brand-text-muted max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-2">
            Access an ever-growing collection of premium, meticulously crafted templates and component packs.
            <br />
            Save time and focus on what matters—building standout websites that captivate your audience.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in stagger-3">
            <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5">
              Explore Collection
            </Button>
            <Button variant="outline" className="border-gray-300 text-brand-text hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5">
              Unlock Unlimited Access
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="space-y-6 animate-fade-in stagger-4">
            <p className="text-sm text-brand-text-muted">
              Trusted by Founders and Entrepreneurs from all over the world.
            </p>

            {/* Avatars */}
            <div className="flex justify-center items-center gap-2 mb-8">
              {avatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt={`User ${index + 1}`}
                  className="w-10 h-10 rounded-full border-2 border-white/20 -ml-2 first:ml-0 hover:scale-110 transition-transform duration-200"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}