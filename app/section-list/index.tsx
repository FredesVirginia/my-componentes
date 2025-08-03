import ThemedCard from '@/presentation/shared/ThemeCard';
import ThemedText from '@/presentation/shared/ThemeText';
import ThemeView from '@/presentation/ThemeView';
import { houses } from '@/utils/utils';
import { SectionList } from 'react-native';

const SectionListScreen = () => {
  return (
     <ThemeView margin>
       <ThemedCard>
        <SectionList sections={houses} 
         renderItem={({item})=> <ThemedText> {item}</ThemedText>}
         keyExtractor={(item)=>item}
         
         ListHeaderComponent={()=>(
                  <ThemedText type="h1" className='font-bold mb-3'> Personajes</ThemedText>
        )}

        
        renderSectionHeader={({section})=>(
          
          <ThemedText type="h1"
          className='bg-light-background dark:bg-dark-background p-2 rounded'
          >
            {section.title}
          </ThemedText>



        )}


        
        ListFooterComponent={()=>(
          
          <ThemedText type="h1" className='font-bold mb-10 bg-light-background dark:bg-dark-background p-2 rounded'>Secciones: {houses.length} </ThemedText>

        )}
        />
       
       
       </ThemedCard>
  </ThemeView>
   
  );
 
};
export default SectionListScreen;
