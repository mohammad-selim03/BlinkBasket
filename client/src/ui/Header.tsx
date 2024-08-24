import { useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import { FiShoppingBag, FiStar, FiUser } from "react-icons/fi";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Container from "./Container";
import { config } from "../../config";
import { getData } from "../lib";
import { CategoryProps, ProductProps } from "../../type";
import FavoriteProduct from "./FavoriteProduct";
import CartProduct from "./CartProduct";
import ProductCard from "./ProductCard";
import { store } from "../lib/store";
import "animate.css";
import { logo2 } from "../assets";

const bottomNavigation = [
  { title: "Home", link: "/" },
  { title: "Shop", link: "/product" },
  { title: "Cart", link: "/cart" },
  { title: "Orders", link: "/orders" },
  { title: "My Account", link: "/profile" },
  { title: "Blog", link: "/blog" },
];

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { cartProduct, favoriteProduct, currentUser } = store();

  // fetching products Data
  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseURL}/products`;
      try {
        const data = await getData(endpoint);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  // fetching categories data
  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseURL}/categories`;
      try {
        const data = await getData(endpoint);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = products.filter((item: ProductProps) =>
      item?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchText]);

  return (
    <div className="w-full bg-whiteText md:sticky md:top-0 z-50">
      <div className="max-w-screen-2xl mx-auto h-20 flex items-center justify-between px-4 lg:px-0">
        {/* Logo */}
        <Link
          to={"/"}
          className="flex items-center gap-2 animate__animated animate__bounce"
        >
          <img src={logo2} alt="logo" height={60} width={60} />
          <p className="text-xl md:text-sm lg:text-3xl font-semibold">Blink Basket Store</p>
        </Link>
        {/* SearchBar */}
        <div className="hidden md:inline-flex max-w-3xl w-full relative animate__animated animate__flash">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            placeholder="Search products..."
            className="w-full flex-1 rounded-lg text-gray-900 text-lg placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-normal focus:ring-1 focus:ring-darkText sm:text-sm px-4 py-2"
          />
          {searchText ? (
            <IoClose
              onClick={() => setSearchText("")}
              className="absolute top-2.5 right-4 text-xl hover:text-red-500 cursor-pointer duration-200"
            />
          ) : (
            <IoSearchOutline className="absolute top-2.5 right-4 text-xl" />
          )}
        </div>
        {/* Search products from api */}
        {searchText && (
          <div className="absolute left-0 top-20 w-full mx-auto max-h-[500px] px-10 py-5 bg-white z-20 overflow-y-scroll text-black shadow-lg shadow-skyText scrollbar-hide ">
            {filteredProducts?.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5  max-w-screen-xl mx-auto animate__animated animate__fadeInLeft">
                {filteredProducts?.map((item: ProductProps, index) => (
                  <ProductCard
                    key={index}
                    item={item}
                    setSearchText={setSearchText}
                  />
                ))}
              </div>
            ) : (
              <div className="py-10 bg-gray-50 w-full flex items-center justify-center border-gray-600 rounded-md">
                <p className="text-xl font-normal">
                  Nothing matches with your search keywords{" "}
                  <span className="underline underline-offset-2 decoration-[1px] text-red-500 font-semibold">{`(${searchText})`}</span>
                  . Please try again
                </p>
              </div>
            )}
          </div>
        )}

        {/* MenuBar goes here */}
        <div className="flex items-center gap-x-6 text-2xl">
          <Link to={"/profile"}>
            {currentUser ? (
              <img
                src={currentUser?.avatar}
                alt="profileImg"
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <FiUser className="hover:text-skyText duration-200 cursor-pointer" />
            )}
          </Link>
          <Link to={"/favorite"} className="relative block">
            <FiStar className="hover:text-skyText duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4">
              {FavoriteProduct?.length > 0 ? favoriteProduct?.length : "0"}
            </span>
          </Link>
          <Link to={"/cart"} className="relative block">
            <FiShoppingBag className="hover:text-skyText duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4">
              {CartProduct?.length > 0 ? cartProduct?.length : "0"}
            </span>
          </Link>
        </div>
      </div>
      <div className="w-full bg-darkText text-whiteText max-w-screen-2xl mx-auto animate__animated animate__fadeInLeft">
        <Container className="py-2 max-w-4xl flex items-center gap-5 justify-between">
          <Menu>
            <MenuButton className="inline-flex items-center gap-2 rounded-md border border-gray-400 hover:border-white py-1.5 px-3 font-semibold text-gray-300 hover:text-whiteText">
              Select Category <FaChevronDown className="text-base mt-1" />
            </MenuButton>
            <Transition
              enter="transition ease-out duration-75"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <MenuItems
                anchor="bottom end"
                className="w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-gray-300 [--anchor-gap:var(--spacing-1)] focus:outline-none hover:text-white z-50"
              >
                {categories.map((item: CategoryProps) => (
                  <MenuItem key={item?._id} >
                    <Link
                      to={`/category/${item?._base}`}
                      className="flex w-full items-center gap-2 rounded-lg py-2 px-3 data-[focus]:bg-white/20 tracking-wide animate__animated animate__bounce"
                    >
                      <img
                        src={item?.image}
                        alt="categoryImage"
                        className="w-6 h-6 rounded-md"
                      />
                      {item?.name}
                    </Link>
                  </MenuItem>
                ))}
              </MenuItems>
            </Transition>
          </Menu>
          {bottomNavigation.map(({ title, link }) => (
            <Link
              to={link}
              key={title}
              className="uppercase hidden md:inline-flex text-sm font-semibold text-whiteText/90 hover:text-whiteText duration-200 relative overflow-hidden group"
            >
              {title}
              <span className="inline-flex w-full h-[1px] bg-whiteText absolute bottom-0 left-0 transform -translate-x-[105%] group-hover:translate-x-0 duration-300" />
            </Link>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default Header;
