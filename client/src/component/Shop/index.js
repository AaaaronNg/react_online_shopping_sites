import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  getBrands,
  getWoods,
  getProductsToShop,
} from "../../actions/product_actions";
import CollapseCheckbox from "../utils/collapseCheckbox";
import { frets, price } from "../utils/Form/fix_categories";
import CollapseRadio from "../utils/collapseRadio";
import LoadmoreCard from "./loadmoreCard";

const Shop = (props) => {
  const [state, setState] = useState({
    grid: "",
    limit: 6, // limit to 5 item
    skip: 0, // for load more
    filters: {
      brand: [],
      frets: [],
      wood: [],
      price: [],
    },
  });

  useEffect(() => {
    props.dispatch(getBrands());
    props.dispatch(getWoods());
    props.dispatch(getProductsToShop(state.skip, state.limit, state.filters));
    console.log("useeffect");
  }, []);

  const handlePrice = (value) => {
    const data = price;
    let array = [];
    for (let key in data) {
      if (data[key]._id === parseInt(value[value.length - 1], 10)) {
        array = data[key].array;
        value.pop();
      }
    }
    return array;
  };

  const showFilteredResults = (filters) => {
    props.dispatch(getProductsToShop(0, state.limit, filters)).then(() => {
      setState({ skip: 0 });
    });
  };

  const handleFilters = (filters, category) => {
    const newFilters = { ...state.filters };
    newFilters[category] = filters;

    if (category === "price") {
      let priceValue = handlePrice(filters);
      newFilters[category] = priceValue;
    }

    showFilteredResults(newFilters);

    setState({
      filters: newFilters,
    });
  };

  const loadMoreCards = () => {
    let skip = state.skip + state.limit;
    props
      .dispatch(
        getProductsToShop(
          skip,
          state.limit,
          state.filters,
          props.products.toShop
        )
      )
      .then(() => {
        setState({ skip });
      });
  };

  return (
    <div>
      {/* for smaller lg size */}
      {/* <button
        class="btn btn-primary d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Toggle right offcanvas
      </button>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">Offcanvas right</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div class="accordion" id="accordionShop">
            {this.collapseCheckbox()}
            
          </div>
        </div>
      </div> */}

      {/* for lg size */}
      <div class="container-fluid">
        <div class="row">
          <nav
            id="sidebarMenu"
            class=" col-lg-2 d-lg-block bg-light sidebar collapse"
          >
            <div class="position-sticky pt-3">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <div class="accordion" id="accordionShop">
                    <CollapseCheckbox
                      list={props.products.brands}
                      title="Brands"
                      handleFilters={(filters) =>
                        handleFilters(filters, "brand")
                      }
                    />
                    <CollapseCheckbox
                      list={frets}
                      title="Frets"
                      handleFilters={(filters) =>
                        handleFilters(filters, "frets")
                      }
                    />
                    <CollapseCheckbox
                      list={props.products.woods}
                      title="Woods"
                      handleFilters={(filters) =>
                        handleFilters(filters, "wood")
                      }
                    />
                    <CollapseRadio
                      title="Price"
                      list={price}
                      handleFilters={(filters) =>
                        handleFilters(filters, "price")
                      }
                    />
                  </div>
                </li>
              </ul>
            </div>
          </nav>

          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <h1 class="h2">Dashboard</h1>
            <LoadmoreCard
              grid={state.grid}
              limit={state.limit}
              size={props.products.toShopSize}
              products={props.products.toShop}
              loadMore={() => loadMoreCards()}
            />
            {/* <LoadmoreCard limit={state.limit} size={products.toShopSize}/> */}
          </main>
        </div>
      </div>
    </div>
  );
};

// class Shop extends Component {
//   componentDidMount() {
//     this.props.dispatch(getBrands());
//     this.props.dispatch(getWoods());
//   }

//   handleFilters = (filters, category) => {
//     const newFilters = { ...this.state.filters };
//     newFilters[category] = filters;
//     console.log(newFilters);
//   };

//   render() {
//     console.log(this.state);
//     return (
//       <div>
//         {/* for smaller lg size */}
//         {/* <button
//           class="btn btn-primary d-lg-none"
//           type="button"
//           data-bs-toggle="offcanvas"
//           data-bs-target="#offcanvasRight"
//           aria-controls="offcanvasRight"
//         >
//           Toggle right offcanvas
//         </button>

//         <div
//           class="offcanvas offcanvas-end"
//           tabindex="-1"
//           id="offcanvasRight"
//           aria-labelledby="offcanvasRightLabel"
//         >
//           <div class="offcanvas-header">
//             <h5 id="offcanvasRightLabel">Offcanvas right</h5>
//             <button
//               type="button"
//               class="btn-close text-reset"
//               data-bs-dismiss="offcanvas"
//               aria-label="Close"
//             ></button>
//           </div>
//           <div class="offcanvas-body">
//             <div class="accordion" id="accordionShop">
//               {this.collapseCheckbox()}

//             </div>
//           </div>
//         </div> */}

//         {/* for lg size */}
//         <div class="container-fluid">
//           <div class="row">
//             <nav
//               id="sidebarMenu"
//               class=" col-lg-2 d-lg-block bg-light sidebar collapse"
//             >
//               <div class="position-sticky pt-3">
//                 <ul class="nav flex-column">
//                   <li class="nav-item">
//                     <CollapseCheckbox
//                       list={this.props.products.brands}
//                       title="Brands"
//                       handleFilters={(filters) =>
//                         this.handleFilters(filters, "brand")
//                       }
//                     />
//                     <CollapseCheckbox
//                       list={frets}
//                       title="Frets"
//                       handleFilters={(filters) =>
//                         this.handleFilters(filters, "frets")
//                       }
//                     />
//                     <CollapseCheckbox
//                       list={this.props.products.woods}
//                       title="Wood"
//                       handleFilters={(filters) =>
//                         this.handleFilters(filters, "wood")
//                       }
//                     />
//                   </li>
//                 </ul>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(Shop);
