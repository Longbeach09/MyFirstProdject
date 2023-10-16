// simulate a database as a global variable
let TEST_DATA = [
  {
    id: 1,
    title: "",
    startDate: "",
    endDate: "",
    description: "",
    destiniation: "",
    cost: 16,
  },
];

let id = 1;

const incrementId = () => {
  id += 1;
  return id;
};

const handlerFunctions = {
  //each key of handlerFunctions is a function, whose
  //value is the function definition

  listPlans: (req, res) => {
    res.send(TEST_DATA);
  },

  getPlan: (req, res) => {
    const id = req.params.planId;
    const plan = TEST_DATA.find(({ id: planId }) => planId === id);

    return plan ? res.send(plan) : res.status(404).send("Plan not Found");
  },

  updatePlan: (req, res) => {
    const incomingPlan = req.params.plan;
    const existingPlanIndex = TEST_DATA.findIndex((plan) => plan.id == id);

    if (existingPlanIndex > -1) {
      TEST_DATA[existingPlanIndex] = incomingPlan;
      res.send(incomingPlan);
    } else {
      res.status(404).send("Plan not Found");
    }
  },

  createPlan: (req, res) => {
    TEST_DATA.push({ ...req.params.plan, id: incrementId() });
    res.send(req.params.plan);
  },

  deletePlan: (req, res) => {
    TEST_DATA = TEST_DATA.filter(({ id }) => {
      return (req.params.id = 8567 == id);
    });
    res.send({ id: req.params.id });
  },
};

export default handlerFunctions;
