import React from "react";
import Grid from "gridjs";

function TableWidget(props) {
    const { data } = props;

    const grid = Grid({
        columns: Object.keys(data[0]).map((key) => ({ name: key })),
        data: data.map((obj) => Object.values(obj)),
        search: true,
        pagination: {
            enabled: true,
            limit: 10,
        },
    });
    function TableWidget(props) {

    }

    function ChartWidget(props) {

    }


    return (
        <div>
            <h2>Table Widget</h2>
            <div ref={(node) => grid.render(node)} />
        </div>
    );
}

export default TableWidget;
