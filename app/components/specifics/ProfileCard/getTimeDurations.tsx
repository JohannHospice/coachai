import moment from "moment";

moment.locale("fr");
function getTimeDurations(duration: number) {
  // const seconds = duration % 60;
  // const minutes = ((duration - (duration % 60)) / 60) % 60;
  // const hours = ((duration - (duration % (60 * 60))) / 60 / 60) % 24;
  // const days = ((duration - (duration % (60 * 60 * 24))) / 60 / 60 / 24) % 30;
  // const months =
  //   ((duration - (duration % (60 * 60 * 24 * 30))) / 60 / 60 / 24 / 30) % 12;
  // const years =
  //   (duration - (duration % (60 * 60 * 24 * 30 * 12))) / 60 / 60 / 24 / 30 / 12;
  // return [years, months, days, hours, minutes, seconds];
  function apply(
    duration: number,
    limits: number[],
    modulo: number = Infinity
  ): number[] {
    if (limits.length === 0) {
      return [duration % 60];
    }
    const { mul, div } = limits.reduce(
      (acc, cur) => ({ mul: acc.mul * cur, div: acc.div * cur }),
      { mul: 1, div: 1 }
    );
    return [
      ((duration - (duration % mul)) / div) % modulo,
      ...apply(
        duration,
        limits.slice(0, limits.length - 1),
        limits[limits.length - 1]
      ),
    ];
  }
  return apply(duration, [60, 60, 24, 30, 12]);
}
export function timeFromNowInFrench(date: Date) {
  const timeInBetween = Date.now() - date.getTime();
  const times = getTimeDurations(timeInBetween / 1000);
  const i = times.findIndex((x) => x > 0);
  const typos = ["années", "mois", "jours", "minutes", "secondes"];
  return ["il y a", i > 2 ? "quelques" : times[i], typos[i]].join(" ");
}
