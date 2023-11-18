import React from "react";
import { useEffect, useState } from "react";
import "./CountDown.scss";

export class CountDown extends React.Component {

    state = {
        distance: '',
        second: '',
        minute: '',
        hour: '',
        day: '',
        dayBrith: '19',
        monthBrith: '11'
    }

    componentDidMount() {

        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        //get today and brithday
        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = yyyy + 1,
            { dayBrith, monthBrith } = this.state,
            birthday = monthBrith + "/" + dayBrith + "/" + yyyy;

        today = mm + "/" + dd + "/" + yyyy;

        if (today > birthday) {
            birthday = monthBrith + "/" + dayBrith + "/" + nextYear;
        }

        this.timer = setInterval(() => {
            const countDown = new Date(birthday).getTime(),
                now = new Date().getTime(),
                distance = countDown - now;
            this.setState({
                distance: distance,
                second: Math.floor((distance % minute) / second),
                minute: Math.floor((distance % hour) / minute),
                hour: Math.floor((distance % day) / hour),
                day: Math.floor(distance / day)
            })
        }, 0)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.distance !== this.state.distance && this.state.distance < 0) {
            if (this.timer) {
                clearInterval(this.timer);
            }
        }
    }

    render() {

        let { distance, second, minute, hour, day, dayBrith, monthBrith } = this.state

        return (
            <>
                {distance > 0 ?
                    <>
                        <h1 id="headline">Countdown to my birthday (CLASS)</h1>
                        <div id="countdown">
                            <ul>
                                <li><span id="days">{day}</span>days</li>
                                <li><span id="hours">{hour}</span>Hours</li>
                                <li><span id="minutes">{minute}</span>Minutes</li>
                                <li><span id="seconds">{second}</span>Seconds</li>
                            </ul>
                        </div>
                    </>
                    :
                    <>
                        <h1 id="headline">Today is {dayBrith + "-" + monthBrith}. It's your brithday</h1>
                        <div id="content" className="emoji">
                            <span>🥳</span>
                            <span>🎉</span>
                            <span>🎂</span>
                        </div>
                    </>
                }
            </>
        )
    }
}



export const CountDownUseHook = () => {
    const [distance, setDistance] = useState('');
    const [second, setSecond] = useState('');
    const [minute, setMinute] = useState('');
    const [hour, setHour] = useState('');
    const [day, setDay] = useState('');
    const [dayBrith, setDayBrith] = useState('19');
    const [monthBrith, setMonthBrith] = useState('11');

    useEffect(() => {
        if (distance < 0) {
            return;
        }

        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        //get today and brithday
        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = yyyy + 1,
            dayOfBrith = dayBrith,
            monthOfBrith = monthBrith,
            birthday = monthOfBrith + "/" + dayOfBrith + "/" + yyyy;

        today = mm + "/" + dd + "/" + yyyy;

        if (today > birthday) {
            birthday = monthOfBrith + "/" + dayOfBrith + "/" + nextYear;
        }

        let timer = setInterval(() => {
            const countDown = new Date(birthday).getTime(),
                now = new Date().getTime(),
                distance = countDown - now;
            setDistance(distance);
            setSecond(Math.floor((distance % minute) / second));
            setMinute(Math.floor((distance % hour) / minute));
            setHour(Math.floor((distance % day) / hour));
            setDay(Math.floor(distance / day));
        }, 0)

        return () => {
            clearInterval(timer);
        }
    }, [distance, dayBrith, monthBrith])


    return (
        <>
            {distance > 0 ?
                <>
                    <h1 id="headline">Countdown to my birthday (HOOK)</h1>
                    <div id="countdown">
                        <ul>
                            <li><span id="days">{day}</span>days</li>
                            <li><span id="hours">{hour}</span>Hours</li>
                            <li><span id="minutes">{minute}</span>Minutes</li>
                            <li><span id="seconds">{second}</span>Seconds</li>
                        </ul>
                    </div>
                </>
                :
                <>
                    <h1 id="headline">Today is {dayBrith + "-" + monthBrith}. It's your brithday</h1>
                    <div id="content" className="emoji">
                        <span>🥳</span>
                        <span>🎉</span>
                        <span>🎂</span>
                    </div>
                </>
            }
        </>
    )
}