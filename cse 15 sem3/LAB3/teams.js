let teams = [
    {
        id:1,
        tname:"Rusty",
        tl:"Aashish Raj Singh",
        email:"ashi.raj@gmail.com",
        members:6
    },

    {
        id:2,
        tname:"Busted",
        tl:"Daku mannu",
        email:"Daku.man@gmail.com",
        members:6
    },

    {
        id:3,
        tname:"Babua",
        tl:"Majnu kumar sachdeva",
        email:"Majnu.kumar@gmail.com",
        members:6
    }
];
let nextId = 3;
export const getAllTeams = () => teams; 
export const getTeamById = (id) => teams.find((team) => team.id === id);
export const addTeam = (nerTeam) => {
    const team = { id: nextId++, newTeam};
    teams.push(team);
    return team;
};
export const updateTeamById = (id,updateTeam) =>{
    const team = getTeamById(id);
    if(team) return null;
    Object.assign(team,updateTeam);
    return team;
};
export const deletById = (id,deleteTeam) =>{
  const index = teams.findIndex((team) => team.id === id);
  if(index == -1) return false;
  team.splice(index,1)
}