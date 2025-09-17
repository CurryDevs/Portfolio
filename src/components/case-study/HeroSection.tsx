import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";

type HeroSectionProps = {
  category: string;
  headline: { h1: string; h2: string };
  subtitle: string;
  cta: { label: string; url: string }[];
};

const HeroSection = ({ category, headline, subtitle, cta }: HeroSectionProps) => {


  return (
    <LampContainer>
      <div id="project-overview" className="text-center px-6 max-w-6xl mx-auto pt-[14rem]">
        {/* Project Category */}

        {/* <div className="inline-flex items-center px-4 py-2 bg-black rounded-full glass mb-8 animate-fade-in">
          <span className="text-sm font-thin text-white dark:text-neutral-200">{category}</span>
        </div> */}

        {/* Main Headline */}
        <h1 className="text-hero my-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="block text-neutral-800 dark:text-neutral-200 text-xl min-[460px]:text-2xl sm:text-3xl font-normal mb-4">
            {headline.h1}
          </span>
          <span className="text-6xl min-[460px]:text-8xl md:text-10xl lg:text-12xl bg-gradient-to-r from-neutral-800 via-white to-neutral-800 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto] dark:from-neutral-200 dark:via-white dark:to-neutral-200">
            {headline.h2}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm min-[460px]:text-lg sm:text-xl text-body-large text-white max-w-3xl mx-auto mb-12 mt-32 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {subtitle}
        </p>

        {/* Single CTA Button */}
        {cta[0] && (
          <a
            href={cta[0].url}
            target={cta[0].url.startsWith("http") ? "_blank" : undefined}
          >
            <Button
              size="lg"
              variant="default"
              className="group px-8 py-4 text-sm min-[460px]:text-lg sm:text-xl font-semibold hover-lift max-[460px]:w-40 "
            >
              {cta[0].label}
            </Button>
          </a>
        )}

      </div>
    </LampContainer>
  );
};

export default HeroSection;