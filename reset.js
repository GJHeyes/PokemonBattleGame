function reset(){
    playerDeck = {}
    computerDeck = {}
    modifiedDeck = JSON.parse(JSON.stringify(fullDeck))
    notClicked = true
    switchedToPlayer = true
    computerCards.classList = ""
    playerCards.classList = ""
    while (computerCards.hasChildNodes() && playerCards.hasChildNodes()) {
        computerCards.removeChild(computerCards.firstChild)
        playerCards.removeChild(playerCards.firstChild)
    }
}