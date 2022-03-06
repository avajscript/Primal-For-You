import React from "react";
import styled from "styled-components";
import Data from "../Data/Data";
import { Link } from "react-router-dom";
const SidebarElem = styled.div`
  position: absolute;
  width: 200px;
  background-color: #e0cece;
  height: 100vh;
  left: 0px;
  float: left;
  transition: left 0.5s ease;

  .title {
    text-align: center;
  }
  .link {
    text-decoration: none;
    text-align: center;

    h2 {
      color: black;
    }
  }
  .linkLi {
    border-bottom: 2px solid black;
    &:hover {
      background-color: #e0cece;
    }
  }
`;
const CataCont = styled.div`
  background: white;
  width: 90%;
  margin: auto;

  border: 1px solid black;
`;

const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px;
`;
const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 20px solid black;
  border-bottom: 20px solid transparent;
  border-top: 20px solid transparent;
  transition: transform 0.5s ease;
  cursor: pointer;
  &:hover {
    border-left: 25px solid #8a0707;
    transition: border-left 1s ease;
  }
`;

const Bottom = styled.div`
  padding-right: 20px;
`;
const DropdownUl = styled.ul``;

export default function Sidebar(props) {
  const [active, setActive] = React.useState(true);
  const ListItems = Object.entries(Data).map(([key, value]) => {
    return (
      <li className="linkLi">
        <Link className="link" to={`/${value.title}`}>
          <h2>{value.title} </h2>
        </Link>
      </li>
    );
  });

  function toggleActive() {
    setActive((prevActive) => !prevActive);
  }

  return (
    <SidebarElem style={active ? {} : { left: "-170px" }}>
      <Flex>
        <Arrow
          onClick={toggleActive}
          style={active ? {} : { transform: "rotate(180deg" }}
        />
      </Flex>
      <Bottom>
        <div className="title">
          <h1> Catagories </h1>
        </div>
        <CataCont>
          <DropdownUl>
            <li className="linkLi">
              <Link className="link" to="/">
                {" "}
                <h2> Home </h2>
              </Link>{" "}
            </li>
            {ListItems}
          </DropdownUl>
        </CataCont>
      </Bottom>
    </SidebarElem>
  );
}
