export default function changeLife(players) {
    players.sort(function (a, b) {
        return b.health - a.health;
      });
      return players;
}