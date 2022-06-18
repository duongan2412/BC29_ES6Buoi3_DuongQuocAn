export class TodoList {
    arr = [];

    addTask(task) {
        this.arr.push(task);
    };

    findIndex(task) {
        let index = -1;
        this.arr.forEach((ele, idx) => {
            if (ele.taskName === task) {
                index = idx;
                // console.log(ele);
            }
        });
        return index;
    };

    deleteTask(task) {
        const index = this.findIndex(task);
        if (index !== -1) {
            this.arr.splice(index, 1);
        }
    };

    filterTaskInProgress(status) {
        return this.arr.filter((task) => {
            if (task.status === "inProgress") {
                return true
            }
            return false;
        })
    }

    filterTaskComp(status) {
        return this.arr.filter((task) => {
            if (task.status === "complete") {
                return true
            }
            return false;
        })
    }

    updateItem(task) {
        this.arr = this.arr.map(ele => {
            return ele.taskName === task.taskName ? task : ele
        })
    };
}