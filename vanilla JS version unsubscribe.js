// script for unsubscribe multiple channels in Youtube

// script for unsubscribe multiple channels in Youtube

// Get the subscribed button
let subscribeBtn=document.querySelectorAll('#subscribe-button yt-formatted-string')

//Get the channels
let channels = document.querySelectorAll('.style-scope ytd-channel-renderer')


// This is Latest JS version Async/Await code
async function timer(i){
    if(i <= channels.length){
        await subscribeBtn[i].click()
        // Get the confirmatin button (unsubscribe button)
        await document.querySelectorAll('#confirm-button')[0].click()
        i++
        timer(i)
    }
}
timer(1)
