import React from 'react'
import style from './News.module.css'

class News extends React.Component {

    ages = [21, 32, 43];
    names = ['Anderew', 'Vasja', 'Kirill'];

    render = () => {


        let newUsers = [];

        this.names.map((name, index) => {
            let user = {name: name, age: this.ages[index]}
            newUsers.push(user)
        })

        let usersList = newUsers.map(n => <p>`User {n.name} is years {n.age} old.`</p>)

        return (
            <div className={style.item}>

                <h4>NEWS</h4>

                {usersList}

            </div>
        );
    }
}

export default News;
