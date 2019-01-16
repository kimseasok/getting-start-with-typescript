function getInputValue(elmentId: string): string {
    let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elmentId);
    return inputElement.value;
}

function logger(message: string) {
    console.log(message);
}

export { getInputValue as getValue, logger };