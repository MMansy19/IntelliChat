import { Box } from "@mui/material";
import Footer from "../components/footer/Footer.tsx";

const NotFound = () => {
  return (
    <Box width={"100%"} height={"100%"}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: 15,
        }}
      >
        <Box>
          <div
            style={{
              fontSize: "60px",
              color: "white",
              display: "inline-block",
              textShadow: "1px 1px 20px #000",
            }}
          >
            Not Found Page
          </div>
        </Box>
      </Box>
      <Box sx={{ mx: "auto", mt: 49 }}>
        <Footer />
      </Box>
    </Box>
  );
};
export default NotFound;
