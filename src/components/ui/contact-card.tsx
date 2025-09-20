import React from 'react';
import { cn } from '@/lib/utils';
import {
    LucideIcon,
    PlusIcon,
} from 'lucide-react';

type ContactInfoProps = React.ComponentProps<'div'> & {
    icon: LucideIcon;
    label: string;
    value: string;
};

type ContactCardProps = React.ComponentProps<'div'> & {
    // Content props
    title?: string;
    description?: string;
    contactInfo?: ContactInfoProps[];
    formSectionClassName?: string;
};

export function ContactCard({
    title = 'Contact With Us',
    description = 'If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.',
    contactInfo,
    className,
    formSectionClassName,
    children,
    ...props
}: ContactCardProps) {
    return (
        <div
            className={cn(
                ' border-white/30 border-[2px] relative grid h-full w-full shadow-2xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
                className,
            )}
            {...props}
        >
            <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 text-white bg-black" />
            <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 text-white bg-black" />
            <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 text-white bg-black" />
            <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 text-white bg-black" />

            <div className="flex flex-col justify-between col-span-1 md:col-span-1 lg:col-span-2">
                <div className="relative h-full space-y-3 sm:space-y-4 px-4 py-6 sm:px-6 sm:py-8 md:p-8">
                    <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                        {title}
                    </h1>
                    <p className="text-gray-400 max-w-xl text-sm xs:text-base sm:text-lg lg:text-xl leading-relaxed">
                        {description}
                    </p>
                    <div className="space-y-4 sm:space-y-6">
                        {contactInfo?.map((info, index) => (
                            <ContactInfo key={index} {...info} />
                        ))}
                    </div>
                </div>
            </div>

            <div
                className={cn(
                    'flex h-full w-full items-center border-white/30 border-t-[2px] p-4 sm:p-5 col-span-1 md:border-t-0 md:border-l-[2px]',
                    formSectionClassName,
                )}
            >
                {children}
            </div>
        </div>
    );
}

function ContactInfo({
    icon: Icon,
    label,
    value,
    className,
    ...props
}: ContactInfoProps) {
    return (
        <div className={cn('flex items-start gap-4', className)} {...props}>
            <div className="bg-white rounded-lg p-3 flex-shrink-0">
                <Icon className="h-5 w-5 text-black" />
            </div>
            <div className="flex-1 pt-1">
                <p className="font-semibold text-white text-sm xs:text-base sm:text-lg lg:text-xl mb-1">{label}</p>
                <p className="text-gray-400 text-sm xs:text-base sm:text-lg lg:text-xl leading-relaxed">{value}</p>
            </div>
        </div>
    );
}