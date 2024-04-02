export type languageType = 'pt-br' | 'en-us';

export interface GlobalContextTypes {
    language: languageType;
    updateLanguage(newLanguage: languageType): void;
}
