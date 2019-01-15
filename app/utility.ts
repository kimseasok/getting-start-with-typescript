class Utility {
    static getInputValue(elmentId: string): string {
        let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elmentId);
        return inputElement.value;
    }
}