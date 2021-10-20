import React from "react";
import "./Versus.css";
import { CharacterDetails } from "../../service/CharacterDetails";

// const useStyles = makeStyles((theme) => ({
//   grid: {
//     width: "100%",
//     margin: "0px",
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//     background: theme.palette.success.light,
//   },
// }));

// function Versus() {
//   const classes = useStyles();
//   return (
//     <Grid container spacing={2} className={classes.grid}>
//       <Grid item xs={12}>
//         <Paper className={classes.paper}>1</Paper>
//       </Grid>
//       <Grid item xs={12}>
//         <Paper className={classes.paper}>1</Paper>
//       </Grid>
//     </Grid>
//   );
// }

const Versus = () => {
  const heroArray = CharacterDetails();

  return (
    <div className="big-container">
      <h1>Versus</h1>
      <div className="wrapper-hero">
        <div className="first-hero"></div>
        <div className="pick-hero">
          {heroArray.map((hero, index) => (
            <div id="choose-hero" key={index}>
              <p className="p-name">{hero.name}</p>
              <p className="p-stats">{hero.powerstats}</p>
            </div>
          ))}
        </div>
        <div className="second-hero"></div>
      </div>
    </div>
  );
};

export default Versus;
