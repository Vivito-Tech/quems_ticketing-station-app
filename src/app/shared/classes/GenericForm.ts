export class GenericForm {
    buttonLabel: string;
    formTitle: string;
    formDescription: string;
    formFields: FormFields[];

    constructor(f: { buttonLabel: string; formTitle: string; formDescription: string; formFields: FormFields[] }) {
        this.buttonLabel = f.buttonLabel;
        this.formTitle = f.formTitle;
        this.formDescription = f.formDescription;
        this.formFields = f.formFields;
    }
}

export class FormFields {
    label: string;
    name: string;
    placeHolder: string;
    type: string;
    widthClass: string;

    constructor(f: { label: string; name: string; placeHolder: string; type: string; widthClass: string }) {
        this.label = f.label;
        this.name = f.name;
        this.placeHolder = f.placeHolder;
        this.type = f.type;
        this.widthClass = f.widthClass;
    }
}
