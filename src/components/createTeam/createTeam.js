import React from 'react';
import './createTeam.css';
import { MdClose } from "react-icons/md";
import TagsInput from "./tagsInput.js";

function FormTeam() {
    const selectedTags = tags => {
        console.log(tags);
    };

    return (
        <section className="formTeam container mb-4">
            <h1>Create your team</h1>
            <hr />
            <div className="row justify-content-center">
                <h3>TEAM INFORMATION</h3>
            </div>
            <form className="form-cadastro px-5 mt-3">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputTeamName">Team name</label>
                        <input type="teamname" className="form-control form-control-sm" id="inputTeamName" placeholder="Insert team name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label className="control-label" for="inputWebsite">Team website</label>
                        <input type="website" className="form-control form-control-sm" id="inputWebsite" placeholder="http://myteam.com" />
                    </div>
                </div>

                <div className="form-row">

                    <div className="form-group col-md-6">
                        <label for="inputAddress">Description</label>
                        <textarea className="form-control form-control-sm" id="exampleFormControlTextarea1" rows="7"></textarea>
                    </div>
                    <div className="form-group col-md-6">
                        <legend className="col-form-label col-sm-6 pt-0">Team Type</legend>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="teamtype" id="teamtype1" value="real" checked />
                            <p className="form-check-label" for="teamtype1">
                                Real
                            </p>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="teamtype" id="teamtype2" value="fantasy" />
                            <p className="form-check-label" for="teamtype2">
                                Fantasy
                            </p>
                            {/* <label class="cont">Real
                            <input type="radio" checked="checked" name="radio" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="cont">Fantasy
                            <input type="radio" name="radio" />
                                <span class="checkmark"></span>
                            </label> */}
                        </div>
                    </div>


                </div>
                <div className="form-row">

                    <div className="form-group col-md-4">
                        <label for="inputFormation">Formation</label>
                        <select id="inputFormation" className="form-control form-control-sm">
                            <option selected>3 - 4 - 3</option>
                            <option>3 - 2 - 2 - 3</option>
                            <option>3 - 2 - 3 - 1</option>
                            <option>3 - 4 - 3</option>
                            <option>3 - 5 - 2</option>
                            <option>4 - 2 - 3 - 1</option>
                            <option>4 - 3 - 1 - 1</option>
                            <option>4 - 3 - 2</option>
                            <option>4 - 4 - 2</option>
                            <option>4 - 5 - 1</option>
                            <option>5 - 4 - 1</option>
                        </select>
                    </div>

                </div>

                <button className="form-cadastro_input form-cadastro_submit">
                    Criar Nota
        </button>
            </form><br></br>
            <div className="tag-container">
                <div className="tag">
                    <span>JavaScript<MdClose /></span>
                </div>
            </div>
            <TagsInput selectedTags={selectedTags} tags={['BR', 'PTW', 'Attack']} />
        </section>
    );
}

export default FormTeam;