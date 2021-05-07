const DEVELOPMENT = true;

const fetchDataReal = () => {
  // Time intensive task
};

const fetchDataFake = () => ({
  name: "Pratik Makune",
  age: 28,
});

const fetchData = DEVELOPMENT ? fetchDataFake() : fetchDataReal;
