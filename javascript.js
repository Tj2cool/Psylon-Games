function loadResponsiveAlert()
{
    if(!sessionStorage.done)
    {
        alert("This Website was tested to be responsive for devices with the dimension of 480 X 854 - 715 X 610. Anything besides the scope" +
         " of these measurement is untested and is currently being worked on. This may cause bad user experience and malfunction of the website");
        sessionStorage.done = true;
    }
}
function loadOfflineAlert()
{
    alert("you are now offline, please reconnect as soon as possible. Thank you!");
} 
function loadOnlineAlert()
{
    alert("you are now back online, thank you for reconnecting. Enjoy!");
}