export const getActivityFromLocalStorage = () => {
    const userActivity = localStorage.getItem('userActivity');

    if (userActivity) {
        return JSON.parse(userActivity);
    }

    else return [];
}


export const saveActivityToLocalStorage = (activity) => {

    // check local if already exists 
    const userActivity = getActivityFromLocalStorage();
    userActivity.push(activity)
    localStorage.setItem('userActivity', JSON.stringify(userActivity));
}