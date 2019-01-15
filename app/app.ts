function startGame() {

    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);

    postScore(80);

}

function logPlayer(name: string = 'MultiMath player'): void {
    console.log(`New game starting for ${name}`);
}

function postScore(score: number, playerName: string = 'MultiMath Player'): void {
    let scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;
}

function getInputValue(elmentId: string): string | undefined {
    let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elmentId);

    if (inputElement.value === '') {
        return undefined;
    } else {
        return inputElement.value;
    }
}

document.getElementById('startGame')!.addEventListener('click', startGame);