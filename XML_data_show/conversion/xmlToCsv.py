import xml.etree.ElementTree as ET
import pandas as pd

#The following are attributes to exclude from tables
historical_figures_excluded_attributes = [
                        "hf_link", "entity_link", "hf_skill", "birth_seconds72", "death_seconds72", "deity", "journey_pet", "ent_pop_id",
                        "site", "appeared", "site_link", "interaction_knowledge", "entity_former_position_link", "sphere", "goal", "entity_position_link",
                        "ent_pop_id", "force", "current_identity_id", "used_identity_id", "vague_relationship", "holds_artifact", "intrigue_plot"
                        ]

def parse_xml(xml_file):
    tree = ET.parse(xml_file)
    root = tree.getroot()
    return root

def extract_historical_figures(root):
    data = []
    for all_historical_figures in root.findall('historical_figures'):
        for record in all_historical_figures.findall('historical_figure'):
            row = {}
            for field in record:
                if field.tag not in historical_figures_excluded_attributes:
                    row[field.tag] = field.text
            data.append(row)

    return data

def extract_regions(root):
    region_data = []
    for all_regions in root.findall('regions'):
        for record in all_regions.findall('region'):
            row = {}
            for field in record:
                if field.tag not in historical_figures_excluded_attributes:
                    row[field.tag] = field.text
            region_data.append(row)
    return region_data

def to_dataframe(data):
    df = pd.DataFrame(data)
    return df

def to_csv(df, filename):
    df.to_csv(filename, index=False)

def main(xml_file, csv_file):
    root = parse_xml(xml_file)
    data = extract_data(root)
    df = to_dataframe(data)
    to_csv(df, csv_file)

def historical_figures(xml_file, csv_file):
    root = parse_xml(xml_file)
    data = extract_historical_figures(root)
    df = to_dataframe(data)
    to_csv(df, csv_file)

def regions(xml_file, csv_file):
    root = parse_xml(xml_file)
    data = extract_regions(root)
    df = to_dataframe(data)
    to_csv(df, csv_file)

if __name__ == "__main__":
    historical_figures('dwarflegends.xml', 'historical_figures.csv')
    regions('dwarflegends.xml', 'regions.csv')
