const AppReducer = (state, action) => {
  switch (action.type) {
    case 'DELETE':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case 'ADD':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case 'SORT':
      switch (action.payload) {
        case 'ascprice':
          return {
            ...state,
            transactions: [...state.transactions].sort(
              (a, b) => a.amount - b.amount
            ),
          };
        case 'descprice':
          return {
            ...state,
            transactions: [...state.transactions].sort(
              (a, b) => b.amount - a.amount
            ),
          };
        case 'ascname':
          return {
            ...state,
            transactions: [...state.transactions].sort(function (a, b) {
              const nameA = a.text.toUpperCase();
              const nameB = b.text.toUpperCase();
              if (nameA < nameB) {
                return -1;
              } else {
                return 1;
              }
            }),
          };
        case 'descname':
          return {
            ...state,
            transactions: [...state.transactions].sort(function (a, b) {
              const nameA = a.text.toUpperCase();
              const nameB = b.text.toUpperCase();
              if (nameA > nameB) {
                return -1;
              } else {
                return 1;
              }
            }),
          };
        default:
          return state.transactions;
      }
    default:
      return state;
  }
};

export default AppReducer;
