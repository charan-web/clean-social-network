// script for unsubscribe multiple channels in Youtube

// Get the subscribed button
let subscribeBtn = document.getElementsByTagName('paper-button')

// Get the confirmatin button (unsubscribe button)
let confirmBtn =  document.querySelectorAll('#confirm-button')

// Get the numbers of channels based on avatars
let avatars = document.querySelectorAll('#avatar').length

let channels = document.querySelectorAll('.style-scope ytd-channel-renderer')


// This is Latest JS version Async/Await code
async function timer(i){
    if(i < channels.length){
        await subscribeBtn[i].click()
        await confirmBtn[0].click()
        i++
        timer(i)
    }
}
timer(1)
