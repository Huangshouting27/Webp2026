import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Container, TextField, Typography, Box } from "@mui/material";

function App() {
  const [rows, setRows] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    fetch(
      "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6"
    )
      .then((res) => res.json())
      .then((data) => {
        const newRows = data.map((item, index) => ({
          id: index + 1,
          title: item.title || "無名稱",
          location:
            item.showInfo && item.showInfo.length > 0
              ? item.showInfo[0].location
              : "無資訊",
        }));

        setRows(newRows);
      })
      .catch((error) => {
        console.error("API 讀取失敗：", error);
      });
  }, []);

  const filteredRows = rows.filter((row) =>
    row.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const columns = [
    {
      field: "title",
      headerName: "名稱",
      flex: 1,
    },
    {
      field: "location",
      headerName: "地點",
      flex: 1,
    },
  ];

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        景點觀光展覽資訊
      </Typography>

      <TextField
        label="搜尋名稱"
        variant="outlined"
        size="small"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        sx={{ mb: 2, width: 300 }}
      />

      <Box sx={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSizeOptions={[10]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
                page: 0,
              },
            },
          }}
        />
      </Box>
    </Container>
  );
}

export default App;