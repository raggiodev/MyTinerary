import {useEffect, useState} from "react";

const moon = new Date();
moon.setHours(19);
moon.setMinutes(30);

const sun = new Date();
sun.setHours(7);
sun.setMinutes(30);

const Clock = () => {
  const [hour, setHour] = useState(new Date());
  const [day, setDay] = useState(true);

  useEffect(() => {
    let intervalID = setInterval(() => {
      const date = new Date();
      setHour(date);
    }, 1000);

    return () => {
      console.log("CLOCK ACTIVE");
      clearInterval(intervalID);
    };
  }, []);

  useEffect(() => {
    if (hour > moon || hour < sun) {
      setDay(false);
    } else {
      setDay(true);
    }
  }, [hour]);

  if (day) {
    return (
      <div className="min-w-10 h-10 flex items-center justify-center ">
        ☀️{" "}
        <h1 className="text-white text-xl">
          {hour.toLocaleTimeString("es-ES")}
        </h1>
      </div>
    );
  }

  return (
    <div className="min-w-40 h-40 flex items-center justify-center ">
      🌙{" "}
      <h1 className="text-white text-xl">{hour.toLocaleTimeString("es-ES")}</h1>
    </div>
  );
};

export default Clock;