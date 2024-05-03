import { Box, Stack } from "@mui/material";
import { Navbar } from "./Navbar";
import { SecNav } from "./SecNav";
import { QueryList } from "./QueryList";
import { Feed } from "./Feed";



function Action() {
  return (
    <Box>
      <Navbar/>
      <SecNav/>
        <Stack direction="row" spacing={0}>
          <QueryList/>
          <Feed/>
        </Stack>
    </Box>
  )
}

export default Action;