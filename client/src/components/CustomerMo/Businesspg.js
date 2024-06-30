import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Businesspg.css";
function Businesspg(props) {
  const [j, setJ] = useState(0);

  const myFunction = () => {
    setJ(j + 1);
    if (j > 7) {
      setJ(8);
    }
  };

  const [bname, setbname] = useState("");
  const [description, setdescription] = useState("");
  const [pic, setpic] = useState("");
  const [location, setlocation] = useState("");

  const onSubmitform = async (e) => {
    e.preventDefault();
    try {
      const body = { bname, description, pic, location };
      const response = await fetch("http://localhost:5000/busi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  const [fname, setfname] = useState("");
  const [f_ing, setf_ing] = useState("");
  const [f_img, setf_img] = useState("");
  const [f_price, setf_price] = useState();
  const [ft_price, setft_price] = useState();

  const onSubmitforms = async (e) => {
    e.preventDefault();
    try {
      const body = { fname, f_ing, f_img, f_price };
      const response = await fetch("http://localhost:5000/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };
  const pric = (e) => {
    setft_price(e.target.value);
  };
  const prices = (e) => {
    var v = ft_price;
    if (v < 500) {
      if (v < 100) {
        v = 1.3 * v;
        setf_price(v);
        // break;
      }
      if (v >= 100) {
        v = 1.25 * v;
        setf_price(v);
        // break;
      }
    } else {
      v = 1.15 * v;
      setf_price(v);
      // break;
    }
  };

  return (
    <div>
      <div>
        <div className="main">
          <div class="card2">
            <div class="card-header" style={{width:"84%"}}>
              <label>
                <h5>BUSINESS Name:</h5>
              </label>
              <br></br>
              <input
                Type="text"
                value={bname}
                onChange={(e) => setbname(e.target.value)}
              ></input>
            </div>
            <ul>
              <li>
                {" "}
                Description: &nbsp;
                <input
                  Type="text"
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                ></input>
              </li>
              <li>
                <label for="img">upload pic: &nbsp;</label>
                <input
                  Type="file"
                  id="img"
                  name="img"
                  accept="image/*"
                  value={pic}
                  onChange={(e) => setpic(e.target.value)}
                />
              </li>
              <li>
                <label for="img">Location: &nbsp;</label>
                <input
                  Type="text"
                  value={location}
                  onChange={(e) => setlocation(e.target.value)}
                ></input>
                <br></br>

                <button onClick={onSubmitform}>Add to your menu</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="all">
        <div className="ee">
          {j >= 0 && (
            <div>
              <label>Add Food items:</label>
              <button Type="button" onClick={myFunction}>
                +
              </button>
            </div>
          )}
        </div>
        <div class="qq">
          <div className="but">
            {j > 0 && (
              <div>
                <div id="min">
                  <div class="card3">
                    <div class="card-header">
                      <label>
                        <h5>Type your food item you offer:</h5>
                      </label>
                      <input
                        Type="text"
                        value={fname}
                        onChange={(e) => setfname(e.target.value)}
                      ></input>
                    </div>
                    <ul >
                      <li>
                        Ingredients
                        <input
                          Type="text"
                          value={f_ing}
                          onChange={(e) => setf_ing(e.target.value)}
                        ></input>
                      </li>
                      <li>
                        <label for="img" value={f_img}>
                          Select image:
                        </label>
                        <input
                          Type="file"
                          id="img"
                          name="img"
                          accept="image/*"
                          onChange={(e) => setf_img(e.target.value)}
                        />
                      </li>
                      <li>
                        <label>Size available:</label>
                        <br></br>
                        <input type="checkbox"></input>
                        <label>Small</label>
                        <input Type="checkbox"></input>
                        <label>Medium</label>
                        <input Type="checkbox"></input>
                        <label>Large</label>
                        <input Type="checkbox"></input>
                        <label>Extra Large</label>
                      </li>
                      <li>
                        <label for="img">Price:</label>
                        <input Type="number" value={ft_price} onChange={pric} />
                      </li>
                      <input Type="checkbox" onClick={prices}></input>
                      <label>Are you sure, is this valid data?</label>

                    </ul>
                      <button onClick={onSubmitforms}>Add to your menu</button>
                  </div>
                </div>
              </div>
            )}
            {j > 1 && (
              <div>
                <div id="min0">
                  <div class="card3">
                    <div class="card-header">
                      <label>
                        <h5>Type your food item you offer:</h5>
                      </label>
                      <input Type="text"></input>
                    </div>
                    <ul>
                      <li>
                        Ingredients
                        <input Type="text"></input>
                      </li>
                      <li>
                        <label for="img">Select image:</label>
                        <input
                          Type="file"
                          id="img"
                          name="img"
                          accept="image/*"
                        />
                      </li>
                      <li>
                        <label>Size available:</label>
                        <br></br>
                        <label>Small</label>
                        <input Type="checkbox"></input>
                        <label>Medium</label>
                        <input Type="checkbox"></input>
                        <label>Large</label>
                        <input Type="checkbox"></input>
                        <label>Extra Large</label>
                        <input Type="checkbox"></input>
                        <div>
                        <label for="img">Price:</label>
                        <input Type="number" value={ft_price} onChange={pric} />
                  


                        </div>
                      </li>
                      <input Type="checkbox" onClick={prices}></input>
                      <label>Are you sure, is this valid data?</label>
                    </ul>
                        <button>Add to your menu</button>
                  </div>
                </div>
              </div>
            )}

            {j > 2 && (
              <div>
                <div id="min1">
                  <div class="card3">
                    <div class="card-header">
                      <label>
                        <h5>Type your food item you offer:</h5>
                      </label>
                      <input Type="text"></input>
                    </div>
                    <ul >
                      <li>
                        Ingredients
                        <input Type="text"></input>
                      </li>
                      <li>
                        <label for="img">Select image:</label>
                        <input
                          Type="file"
                          id="img"
                          name="img"
                          accept="image/*"
                        />
                      </li>
                      <li>
                        <label>Size available:</label>
                        <br></br>
                        <label>Small</label>
                        <input Type="checkbox"></input>
                        <label>Medium</label>
                        <input Type="checkbox"></input>
                        <label>Large</label>
                        <input Type="checkbox"></input>
                        <label>Extra Large</label>
                        <input Type="checkbox"></input>
                        <button>Add to your menu</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="ww">
            {j > 3 && (
              <div>
                <div id="min2">
                  <div class="card3">
                    <div class="card-header">
                      <label>
                        <h5>Type your food item you offer:</h5>
                      </label>
                      <input Type="text"></input>
                    </div>
                    <ul >
                      <li>
                        Ingredients
                        <input Type="text"></input>
                      </li>
                      <li>
                        <label for="img">Select image:</label>
                        <input
                          Type="file"
                          id="img"
                          name="img"
                          accept="image/*"
                        />
                      </li>
                      <li>
                        <label>Size available:</label>
                        <br></br>
                        <label>Small</label>
                        <input Type="checkbox"></input>
                        <label>Medium</label>
                        <input Type="checkbox"></input>
                        <label>Large</label>
                        <input Type="checkbox"></input>
                        <label>Extra Large</label>
                        <input Type="checkbox"></input>
                        <button>Add to your menu</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {j > 4 && (
              <div>
                <div id="min4">
                  <div class="card3">
                    <div class="card-header">
                      <label>
                        <h5>Type your food item you offer:</h5>
                      </label>
                      <input Type="text"></input>
                    </div>
                    <ul >
                      <li>
                        Ingredients
                        <input Type="text"></input>
                      </li>
                      <li>
                        <label for="img">Select image:</label>
                        <input
                          Type="file"
                          id="img"
                          name="img"
                          accept="image/*"
                        />
                      </li>
                      <li>
                        <label>Size available:</label>
                        <br></br>
                        <label>Small</label>
                        <input Type="checkbox"></input>
                        <label>Medium</label>
                        <input Type="checkbox"></input>
                        <label>Large</label>
                        <input Type="checkbox"></input>
                        <label>Extra Large</label>
                        <input Type="checkbox"></input>
                        <button>Add to your menu</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {j > 5 && (
              <div>
                <div id="min3">
                  <div class="card3">
                    <div class="card-header">
                      <label>
                        <h5>Type your food item you offer:</h5>
                      </label>
                      <input Type="text"></input>
                    </div>
                    <ul >
                      <li>
                        Ingredients
                        <input Type="text"></input>
                      </li>
                      <li>
                        <label for="img">Select image:</label>
                        <input
                          Type="file"
                          id="img"
                          name="img"
                          accept="image/*"
                        />
                      </li>
                      <li>
                        <label>Size available:</label>
                        <br></br>
                        <label>Small</label>
                        <input Type="checkbox"></input>
                        <label>Medium</label>
                        <input Type="checkbox"></input>
                        <label>Large</label>
                        <input Type="checkbox"></input>
                        <label>Extra Large</label>
                        <input Type="checkbox"></input>
                        <button>Add to your menu</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Businesspg;
