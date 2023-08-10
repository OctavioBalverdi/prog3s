import { AppstoreTwoTone , HomeTwoTone, ShoppingTwoTone , DollarTwoTone, HeartTwoTone } from '@ant-design/icons'
import { NavLink } from "react-router-dom"


const Sidebar = () => {

    return (<div className="fixed top-0 left-0 h-screen p-2 bg-gray-100">
      <ul className="p-5 space-y-8">
        <li>
          <NavLink to='/registro' >
          <button >
            <AppstoreTwoTone size={"1.5rem"} />
          </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/home">
            <button>
              <HomeTwoTone size={"1.5rem"} />
            </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/cart">
            <button>
              <DollarTwoTone size={"1.5rem"} />
            </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/favs">
            <button>
              <HeartTwoTone size={"1.5rem"} />
            </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/orders">
            <button>
              <ShoppingTwoTone size={"1.5rem"} />
            </button>
          </NavLink>
        </li>
        
      </ul>
    </div>)
}
export default Sidebar
