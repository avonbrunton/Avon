import { Helmet } from "react-helmet-async";
import { useState } from "react";
// @mui
import { Container, Stack, Typography } from "@mui/material";
// components
import {
  ProductSort,
  ProductList,
  ProductFilterSidebar,
} from "../../sections/@dashboard/products";
import { ProductAddDialog } from "../../sections/@dashboard/products";
// mock
import PRODUCTS from "../../_mock/products";

// ----------------------------------------------------------------------

export default function ProductsPage() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <>
      <Helmet>
        <title> Dashboard: Products | Minimal UI </title>
      </Helmet>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" sx={{ mb: 5 }}>
            Products
          </Typography>
          <ProductAddDialog />
        </Stack>
        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mb: 5 }}
        ></Stack>

        <ProductList products={PRODUCTS} />
      </Container>
    </>
  );
}
