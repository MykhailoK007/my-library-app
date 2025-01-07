import React from "react";
import { View } from "react-native";
import { Button, TextInput, TextInputProps, Card } from "react-native-paper";

type ModifiedInputProps = TextInputProps & {label: string};
type TFieldValues = Record<string, string>;
export type TField = Omit< ModifiedInputProps, 'value'| 'onChangeText'>;
type TProps = {  
  fields : TField[],
  title: string;
  handleSubmit(fieldValues: TFieldValues):void 
}

const getInitialValues = (fields: TProps['fields']) => {
  return fields.reduce((acum, fieldProps) => ({...acum, [fieldProps.label]:''}), {})
}
const AuthForm = ({fields, handleSubmit, title}: TProps) => {
  const [fieldValues, setFieldValues] = React.useState<TFieldValues>(getInitialValues(fields));
  const handleChangeFieldValue = (label: string) => (value: string) => {
    setFieldValues(prev => ({...prev, [label]: value}))
  }
  return (
    <View style={{marginTop: 200}}>
      <Card>
        <Card.Title title={title} />
        <Card.Content>
          {fields.map((fieldProps) => (
            <TextInput
              {...fieldProps}
              value={fieldValues[fieldProps.label]}
              onChangeText={handleChangeFieldValue(fieldProps.label)}
              style={{marginBlockEnd: 8}}
              key={fieldProps.label}

            />
          ))}
        </Card.Content>
        <Card.Actions>
          <Button style={{}} onPress={() => handleSubmit(fieldValues)} mode='contained'>Submit</Button>
        </Card.Actions>
      </Card>
    </View>
 )
}

export default AuthForm;