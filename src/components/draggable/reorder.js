export const reorder = (data, startIndex, endIndex) => {
    const reorderedData = Array.from(data);
    const [removedDataItem] = reorderedData.splice(startIndex, 1)
    reorderedData.splice(endIndex, 0, removedDataItem);

    return reorderedData;
}
