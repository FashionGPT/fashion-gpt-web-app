
import { baseAPIURL } from "../../constants/constants";


async function OutfitSelector () {
    
    // try {
    //     const response = await fetch(
    //       `${baseAPIURL}/Clothing/clothing-feed`,
    //       {
    //         method: "GET",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     );
    //     const result = await response.json();
    //     console.log(response);
    //   } catch (error) {
    //     console.log(`Clothing Error: ${error}`);
    //   }

    return (
        <select id="outfitForm" placeholder="select outfit" data-style="btn-info" name="selectpicker">
            <option name="opt1" value="1">Business Outfit</option>
            <option name="opt2" value="2">Dress Outfit</option>
            <option name="opt3" value="3">Casual Outfit</option>
        </select>
    )
}

export default OutfitSelector;