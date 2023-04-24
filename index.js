// code your solution here
function superbowlWin(record) {

    let findWin = record.find(({result}) => result === 'W')
        if (findWin){
            return findWin["year"]
        }
}
