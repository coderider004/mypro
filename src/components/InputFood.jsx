import React from 'react'
import 'bulma/css/bulma.css'

export default function InputFood() {
    return(
        <section class="section container">
            <div className="container">
                <div class="column">
                    <p class="bd-notification is-danger">Cal Diary</p>
                    <br></br>

                    <table border="3" width="100%">
                        <tr border="0">
                            <td border="0">
                            <br/>
                                <form>
                                    <div class="columns">
                                        <div class="column">
                                            <h3 align="center">Meal</h3>
                                        </div>
                                        <div class="column" align="left">
                                            <div class="select is-rounded">
                                                <select class="is-hovered">
                                                    <option value="breakfast">Breakfast</option>
                                                    <option value="lunch">Lunch</option>
                                                    <option value="dinner">Dinner</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="columns">
                                        <div class="column">
                                            <h3 align="center">Food</h3>
                                        </div>
                                        <div class="column" align="left">
                                            <input size="10" type="text" class="input is-rounded is-hovered"/>
                                        </div>
                                    </div>

                                    <div class="columns">
                                        <div class="column">
                                            <h3 align="center">   Calorie</h3>
                                        </div>
                                        <div class="column" align="left">
                                            <input type="number" size="10" class="input is-rounded is-hovered"/>
                                        </div>
                                    </div>
                                </form>
                                <br/>
                            </td>
                        </tr>
                    </table>

                    <br/>

                    <div class="columns">
                        <div class="column">
                            <button class="button is-success is-rounded">Add</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );

}