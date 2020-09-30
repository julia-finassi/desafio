import React, { Component } from 'react';
import './myteams.css';
import { Link } from 'react-router-dom';
import axios from "../../services/api";
import { MdShare, MdDelete, MdEdit } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import ReactTooltip from "react-tooltip";

class Render extends Component {
    state = {
        coments: []
    }
    // componentDidMount() {
    //     this.loadTeams();
    // }
    // loadTeams = async () => {
    //     const response = await axios.get();
    //     this.setState({coments: response.data})


    // }


    render() {
        const { coments } = this.state
        return (
            <>
                {coments.map(coments => (
                    <tr key={coments.team_id}>
                        <td>{coments.teamName}</td>
                        <td>{coments.player_name}</td>

                    </tr>
                ))}

            </>
        )
    }

}

const Myteams = () => {


    const players = [
        { id: "aaa", name: "bbb", description: "ccc" },
        { id: "ccc", name: "aaa", description: "eeee" }
    ]
    const renderPlayer = (coments, team_id) => {
        return (
            <tr key={coments.team_id}>
                <td>{coments.teamName}</td>
                <td>{coments.player_name}</td>

                <td>
                    <div className="icons">
                        
                            <MdShare data-tip data-for="shareTip"/>
                        
                        <ReactTooltip id="shareTip" place="top" effect="solid">
                            Share
                        </ReactTooltip>
                        <MdDelete data-tip data-for="deleteTip"/>
                        <ReactTooltip id="deleteTip" place="top" effect="solid">
                            Delete
                        </ReactTooltip>
                        <MdEdit data-tip data-for="editTip"/>
                        <ReactTooltip id="editTip" place="top" effect="solid">
                            Edit
                        </ReactTooltip>
                    </div>
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
                    {/* /*<Link to="/team/create"></Link> */}
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
                    {players.map(renderPlayer)}

                </tbody>


            </table>
        </section>

    );
}

export default Myteams;