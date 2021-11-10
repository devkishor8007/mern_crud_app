import React from "react";

export default function HomePage() {
  const imageList = [
    "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=961&q=80",
    "https://images.unsplash.com/photo-1483808161634-29aa1b0e585e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1604845152150-79d128ac8817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1636491058513-10b719b73e37?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=553&q=80",
    "https://images.unsplash.com/photo-1636453774075-cdd32eb64304?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=848&q=800",
    "https://images.unsplash.com/photo-1636390785258-f59cd6883a03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1635002962670-cd1cdd25d45d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1617791160588-241658c0f566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  ];

  return (
    <>
      <div className="mx-5">
        <h1 className="text-center bg-danger text-light">List of Images</h1>

        <div className="container-fluid mb-5">
          <div className="row text-center">
            {imageList.map((e, index) => {
              return (
                <div className="col-10 col-md-4 mt-2" key={index}>
                  <div
                    className="card"
                    style={{ padding: "2px", width: "10rem" }}
                  >
                    <div className="d-flex align-items-center">
                      <img
                        style={{
                          objectFit: "cover",
                          width: "400px",
                          height: "300px",
                        }}
                        src={e}
                        alt="a"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
