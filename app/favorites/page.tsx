import getCurrentUser from "../actions/getCurrentUser"
import ClientOnly from "../components/ClientOnly"
import EmptyState from "../components/EmptyState"
import getFavoriteListings from "@/app/actions/getFavoriteListings";

import FavoritesClient from "./FavoritesClient";


const page = async () => {
   
        const listings = await getFavoriteListings();
        const currentUser = await getCurrentUser();
      
        if (listings.length === 0) {
          return (
            <ClientOnly>
              <EmptyState
                title="No favorites found"
                subtitle="Looks like you have no favorite listings."
              />
            </ClientOnly>
          );
        }
      
        return (
          <ClientOnly>
            <FavoritesClient
              listings={listings}
              currentUser={currentUser}
            />
          </ClientOnly>
        );
}

export default page
