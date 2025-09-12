export type ParallaxSectionProps = {
    parallaxImage: string;
    parallaxRef?: React.RefObject<HTMLDivElement | null>; // Allow null
    parallaxTextTitle?: string;
    parallaxTextParagraph: React.ReactNode; // Change this to accept JSX
};

export type FieldName = 'name' | 'email' | 'phone' | 'message';
// export type FieldName = 'name';
export type FormFieldType = {
    label: string;
    type: string;
    placeholder: string;
    name: FieldName;
}[];
