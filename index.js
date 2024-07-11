// code your solution here
const superbowlWin = (record) => {
    for (let i = 0; i < record.length; i++) {
        if (record[i].result === "W") {
            return record[i].year
        }
    }
}