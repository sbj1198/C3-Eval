import { useContext } from "react";
import { TotalContext } from "../contexts/TotalContext";
import { TerminateContext } from "../contexts/TerminateContext";
import { PromoteContext } from "../contexts/PromoteContext";
import { NewContext } from "../contexts/NewContext";

export const Home = () => {
  
  const {total} = useContext(TotalContext);
  const {terminate} = useContext(TerminateContext);
  const {promote} = useContext(PromoteContext);
  const {newEmp} = useContext(NewContext);

  return (
    <>
      <h3 className="welcome">Welcome To employee management system</h3>
      <div className="home">
        <span>Stats</span>
        <div>
          Total Employees<span className="totalemp"> {total}</span>
        </div>
        <div>
          Total Terminated: <span className="total_terminated">{terminate}</span>
        </div>
        <div>
          Total Promoted: <span className="total_promoted">{promote}</span>
        </div>
        <div>
          Total New: <span className="total_new">{newEmp}</span>
        </div>
      </div>
    </>
  );
};

// create statistics for user.
  // get Total user count from DB,
  // other fields are in memory values stored in context API.
  // they will reset to 0
  // if page gets refreshed

  // thins to store in context api
  //   total: get from db,
  //   terminated: 0, // inc when user in terminated
  //   promoted: 0,// inc when user in promoted
  //   total_new: 0,// inc when a new user in created