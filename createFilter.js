export async function createFilter(data) {
    const filter = document.getElementById('filter');

        const allRegions = [];
        for (let key in data) {
          allRegions.push(data[key].region);
        }
        const uniqueRegions = [...new Set(allRegions)];
        
        for (let region of uniqueRegions) {
          const option = document.createElement('option');
          option.value = region;
          option.textContent = region;
          filter.append(option);
        }

        console.log(uniqueRegions)
}