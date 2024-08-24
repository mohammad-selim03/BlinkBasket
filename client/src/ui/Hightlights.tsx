import { useEffect, useState } from "react";
import Container from "./Container";
import { getData } from "../lib";
import { HighlightsType } from "../../type";
import { Link } from "react-router-dom";
import { config } from "../../config";
// import Loading from "./Loading";
import ProductModal from "./ProductModal";

const Hightlights = () => {
  const [highlightsData, setHighlightsData] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseURL}/highlights`;
      try {
        // setLoading(true);
        const data = await getData(endpoint);
        setHighlightsData(data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ProductModal />
      
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {!highlightsData ? (
            <div>Loading...</div>
          ) : (
            <>
              {highlightsData?.map((item: HighlightsType) => (
                <div
                  key={item?._id}
                  className="relative h-60 rounded-lg shadow-md cursor-pointer overflow-hidden group"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center rounded-lg transition-transform duration-300 group-hover:scale-110 animate__animated animate__fadeInLeft"
                    style={{
                      backgroundImage: `url(${item?.image})`,
                      color: item?.color,
                    }}
                  ></div>
                  <div
                    className="relative z-10 p-6 flex flex-col justify-between h-full"
                    style={{ color: item?.color }}
                  >
                    <div>
                      <h3 className="text-2xl font-bold max-w-44">
                        {item?.name}
                      </h3>
                      <p className="text-base font-bold mt-4">{item?.title}</p>
                    </div>
                    <Link to={item?._base} className="text-base font-normal">
                      {item?.buttonTitle}
                    </Link>
                  </div>
                </div>
              ))}
            </>
          )}
        </Container>
    </div>
  );
};

export default Hightlights;
