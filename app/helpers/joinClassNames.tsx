export default function joinClassNames(...classNames: string[]): string{
    return classNames.filter(item => item).join(' ');
}