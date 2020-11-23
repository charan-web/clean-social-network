let subscribeBtn = document.getElementsByTagName('paper-button')

// Get the confirmatin button (unsubscribe button)
let confirmBtn =  document.querySelectorAll('#confirm-button')

// Get the numbers of channels based on avatars
let avatars = document.querySelectorAll('#avatar').length-1


// This is Latest JS version Async/Await code
async function timer(i){
    if(i < 5){
        await subscribeBtn[i].click()
        await confirmBtn[0].click()
        i++
        timer(i)
    }
}
timer(1)