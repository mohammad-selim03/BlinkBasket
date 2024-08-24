import { useEffect, useState } from "react";
import Container from "./Container";
import { getData } from "../lib";
import Title from "./Title";
import { Link } from "react-router-dom";
import { CategoryProps } from "../../type";
import { config } from "../../config";
import Loading from "./Loading";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseURL}/categories`;
      try {
        setLoading(true);
        const data = await getData(endpoint);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally{
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <div className="mb-10">
            <div className="flex items-center justify-between animate__animated animate__backInLeft">
              <Title text="Popular categories" />
              <Link
                to={"/category/tvAndAudio"}
                className="font-medium relative group overflow-hidden"
              >
                View All Categories{" "}
                <span className="absolute bottom-0 left-0 w-full block h-[1px] bg-gray-600 -translate-x-[100%] group-hover:translate-x-0 duration-300" />
              </Link>
            </div>
            <div className="w-full h-[1px] bg-gray-200 mt-3" />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7">
            {categories.map((item: CategoryProps) => (
              <Link
                to={`/category/${item?._base}`}
                key={item?._id}
                className="w-full h-auto relative group overflow-hidden"
              >
                <img
                  src={item?.image}
                  alt="categoryImage"
                  className="w-full h-auto rounded-md group-hover:scale-110 duration-300"
                />
                <div className="absolute bottom-3 w-full text-center">
                  <p className="text-sm md:text-base font-bold">{item?.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      )}
    </div>
  );
};

export default Categories;
