import React, { Component } from 'react';
import './myteams.css';
import { Link } from 'react-router-dom';
import api from "../../services/api";
import { MdShare, MdDelete, MdEdit } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import ReactTooltip from "react-tooltip";

class Render extends Component {
    state = {
        coments: []
    }
    componentDidMount() {
        this.loadTeams();
    }
    loadTeams = async () => {
        const response = await api.get('/people');
        this.setState({coments: response.data.results})
        console.log(this.state)

    }
    
    render() {
        const { coments } = this.state
        return (
            <>
                {coments.map(coments => (
                    <tr key={coments.index}>
                        <td>{coments.name}</td>
                        <td>{coments.hair_color}</td>

                    </tr>
                ))}

            </>
        )
    }

}

const Myteams = () => {
    
    const teams = [
        { id: "aaa", name: "bbb", description: "ccc" },
        { id: "ccc", name: "aaa", description: "eeee" }
    ]
    const renderTeam = (coments, index) => {
        return (
            <tr key={coments.index}>
                <td>{coments.name}</td>
                <td>{coments.hair_color}</td>
                <td>
                        <MdShare data-tip data-for="shareTip" />

                        <ReactTooltip id="shareTip" place="top" effect="solid">
                            Share
                        </ReactTooltip>
                        <MdDelete data-tip data-for="deleteTip" />
                        <ReactTooltip id="deleteTip" place="top" effect="solid">
                            Delete
                        </ReactTooltip>
                        <MdEdit data-tip data-for="editTip" />
                        <ReactTooltip id="editTip" place="top" effect="solid">
                            Edit
                        </ReactTooltip>
                    
                </td>

            </tr>
        );
    }
    return (

        <section className="myt container">
            <div className="row">
                <div className="col-sm-9 col-md-9 col-lg-10">
                    <h1>My teams</h1>
                </div>
                <div className="d-inline col-sm-3 col-md-2 col-lg-2">
                    
                    <Link to="/team/create">
                        <button src="/team/create" className="addButton mt-3 ml-auto" type="button"> <GoPlus />
                        </button>
                    </Link>

                </div>
            </div>
            <hr />

             <table className="mx-3 teams">
                <Render />

                <thead>
                    <th className="hr">Name</th>
                    <th>Description</th>
                    <th></th>
                </thead>
                <tbody>
                    {teams.map(renderTeam)}

                </tbody>


            </table> 
        </section>

    );
}

export default Myteams;