const customApiResponse = {
    showProfileFinder: true,
    showAccordion: false,
    showTicTacToe: true,
    showColorGenerator: false,
    showLoadMoreButton: true
};

function apiServices() {
    return new Promise((resolve,reject)=>{
        if (customApiResponse) {
            setTimeout(resolve(customApiResponse),500);
        } else {
            reject('Please try again...');
        }
    })
    
}
export default apiServices;